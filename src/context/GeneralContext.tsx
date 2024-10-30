'use client'
import { Work } from '@/components/HomePage/ProjectsSection';
import { Article } from '@/components/WritingPage/AllArticlesSection';
import React, {createContext, useContext, useState, ReactNode, Dispatch, SetStateAction} from 'react';

interface GeneralContextProps {
  works: Work[];
  totalPages: number;
  demoWorks : Work[];
  articles: Article[];
  demoArticles: Article[];
  isLoading: boolean;
  fetchWorks: (pageNo: number, count: number, isDemo : boolean) => Promise<void>;
  fetchArticles: (pageNo: number, count: number, isDemo : boolean) => Promise<void>;
  fetchArticlesByTag : (pageNo: number, count: number, tag : string) => Promise<void>;
  setTotalPages :  Dispatch<SetStateAction<number>>;
}

const GeneralContext = createContext<GeneralContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [works, setWorks] = useState<Work[]>([]);
  const [demoWorks, setDemoWorks] = useState<Work[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [demoArticles, setDemoArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1); /* pages for article pagination*/

  const fetchWorks = async (pageNo: number, count: number, isDemo : boolean) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/worksPage?pageNo=${pageNo}&count=${count}`);
      const data = await response.json();
      const worksArray: Work[] = data.works;
      if(isDemo) {
        setDemoWorks(worksArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
      }else {
        setWorks(worksArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
      }
      
    } catch (error) {
      console.error("Error fetching works:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchArticles = async (pageNo: number, count: number, isDemo :boolean) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/articlesPage?pageNo=${pageNo}&count=${count}`);
      const data = await response.json();
      const articlesArray: Article[] = data.articles;
      if(isDemo) {
        setDemoArticles(articlesArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
      } else {
        setArticles(articlesArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
        setTotalPages(data.totalPages)
      }
    } catch (error) {
      console.error("Error fetching works:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchArticlesByTag = async (pageNo: number, count: number, tag :string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/articlesTagPage?pageNo=${pageNo}&count=${count}&tag=${tag}`);
      const data = await response.json();
      const articlesArray: Article[] = data.articles;
      setArticles(articlesArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error("Error fetching works:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GeneralContext.Provider value={{ works, articles, demoArticles, demoWorks, isLoading, fetchWorks, fetchArticles, fetchArticlesByTag, totalPages, setTotalPages }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = (): GeneralContextProps => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('useGeneralContext must be used within a ContextProvider');
  }
  return context;
};
