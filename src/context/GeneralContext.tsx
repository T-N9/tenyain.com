'use client'
import { Work } from '@/components/HomePage/ProjectsSection';
import { Article } from '@/components/WritingPage/AllArticlesSection';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GeneralContextProps {
  works: Work[];
  articles: Article[];
  isLoading: boolean;
  fetchWorks: (pageNo: number, count: number) => Promise<void>;
  fetchArticles: (pageNo: number, count: number) => Promise<void>;
}

const GeneralContext = createContext<GeneralContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [works, setWorks] = useState<Work[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchWorks = async (pageNo: number, count: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/worksPage?pageNo=${pageNo}&count=${count}`);
      const data = await response.json();
      const worksArray: Work[] = data.works;
      setWorks(worksArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
    } catch (error) {
      console.error("Error fetching works:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchArticles = async (pageNo: number, count: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/articlesPage?pageNo=${pageNo}&count=${count}`);
      const data = await response.json();
      const articlesArray: Article[] = data.articles;
      setArticles(articlesArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
    } catch (error) {
      console.error("Error fetching works:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <GeneralContext.Provider value={{ works, articles, isLoading, fetchWorks, fetchArticles }}>
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
