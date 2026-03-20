import AppLayoutHeader from '@/layouts/app/app-header-layout';
import AppLayoutSidebar from '@/layouts/app/app-sidebar-layout';
import type { AppLayoutProps } from '@/types';
import { usePage } from '@inertiajs/react';

export default function AppLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {

    const { auth } = usePage().props as any;
    const user = auth?.user;

    if (user?.role == 'student') {
        return (
            <AppLayoutHeader breadcrumbs={breadcrumbs} {...props}>
                {children}
            </AppLayoutHeader>
        );
    }

    return (
        <AppLayoutSidebar breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppLayoutSidebar>
    );
}
