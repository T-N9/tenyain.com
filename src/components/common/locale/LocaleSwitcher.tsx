'use client';

import { Dropdown } from 'flowbite-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const locales = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' }
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const switchLocale = (targetLocale: string) => {
        if (locale === targetLocale) return;

        const segments = pathname.split('/');
        segments[1] = targetLocale;
        const newPath = segments.join('/');

        router.push(newPath);
        router.refresh(); // 👈 ensures the layout re-runs with correct locale
    };


    const current = locales.find((l) => l.code === locale);

    return (
        <Dropdown label={`${current?.flag}`} inline>
            {locales.map(({ code, flag }) => (
                <Dropdown.Item
                    key={code}
                    onClick={() => switchLocale(code)}
                    className={locale === code ? 'font-semibold text-primary-600' : ''}
                >
                    {flag}
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
}
