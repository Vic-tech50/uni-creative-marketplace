import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { CardImage } from '../ui/card';
import { Car } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Photographer List',
        href: dashboard(),
    },
];

export default function PhotographerList() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Photographer List" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4 my-20">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <CardImage name = "Samson James" description = "This is the way to reach me" alt = "img"/>
                    </div>
                    <div className="">
                       <CardImage name = "Samson James" description = "This is the way to reach me" alt = "img"/>
                    </div>
                    <div className="">
                       <CardImage name = "Samson James" description = "This is the way to reach me" alt = "img" />
                    </div>
                </div>
                           </div>
        </AppLayout>
    );
}
