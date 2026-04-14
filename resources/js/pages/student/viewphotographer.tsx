import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6 bg-white/60 dark:bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-none">
                                    <img
                                        alt="Photographer"
                                        src="/images/placeholders/photographer.jpg"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-semibold">Aisha Bello</h1>
                                    <p className="text-sm text-muted-foreground">Wedding & Portrait Photographer</p>
                                    <div className="mt-2 flex items-center gap-3 text-sm">
                                        <div className="flex items-center gap-1 text-amber-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.842L19.335 24 12 19.897 4.665 24 6 15.59 0 9.748l8.332-1.73z" />
                                            </svg>
                                            <span className="font-medium">4.9</span>
                                            <span className="text-muted-foreground">· 256 reviews</span>
                                        </div>
                                        <div className="text-muted-foreground">•</div>
                                        <div className="text-muted-foreground">Lagos, Nigeria</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-auto flex items-center gap-3">
                                <button className="px-4 py-2 rounded-md border border-sidebar-border/60 dark:border-sidebar-border bg-white/80 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 text-sm">
                                    Message
                                </button>
                                <button className="px-4 py-2 rounded-md bg-primary text-white text-sm shadow hover:opacity-95">
                                    Book Now
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left column: Services & Pricing */}
                            <aside className="md:col-span-1 space-y-4">
                                <div className="p-4 rounded-lg border border-sidebar-border/50 dark:border-sidebar-border bg-white/60 dark:bg-gray-900">
                                    <h3 className="text-lg font-medium mb-2">Starting Price</h3>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-3xl font-semibold">₦25,000</span>
                                        <span className="text-sm text-muted-foreground">/ session</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Includes 1-hour shoot, 15 edited photos, and online gallery delivery.
                                    </p>
                                    <div className="mt-4 grid grid-cols-2 gap-2">
                                        <button className="col-span-1 px-3 py-2 rounded-md border border-sidebar-border/60 dark:border-sidebar-border bg-white/70 dark:bg-gray-800 text-sm">
                                            Custom Inquiry
                                        </button>
                                        <button className="col-span-1 px-3 py-2 rounded-md bg-primary text-white text-sm">
                                            Reserve
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg border border-sidebar-border/50 dark:border-sidebar-border bg-white/60 dark:bg-gray-900">
                                    <h3 className="text-lg font-medium mb-3">Services</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>Wedding Coverage</span>
                                            <span className="font-medium">From ₦120,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Engagement Session</span>
                                            <span className="font-medium">₦40,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Portrait Session</span>
                                            <span className="font-medium">₦25,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Event Coverage</span>
                                            <span className="font-medium">From ₦80,000</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-lg border border-sidebar-border/50 dark:border-sidebar-border bg-white/60 dark:bg-gray-900">
                                    <h3 className="text-lg font-medium mb-2">Contact</h3>
                                    <p className="text-sm text-muted-foreground">Open to inquiries. Typical response time: 24 hours.</p>
                                    <div className="mt-3 space-y-1 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span>Phone</span>
                                            <a className="text-primary" href="tel:+234800000000">+234 800 000 000</a>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Email</span>
                                            <a className="text-primary" href="mailto:aisha@studio.com">aisha@studio.com</a>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Right column: Gallery, Description, Reviews */}
                            <main className="md:col-span-2 space-y-6">
                                <section className="rounded-lg border border-sidebar-border/50 dark:border-sidebar-border bg-white/70 dark:bg-gray-900 p-4">
                                    <h2 className="text-lg font-semibold mb-3">About</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Aisha is a professional photographer with over 8 years of experience specializing in weddings,
                                        portraits, and lifestyle shoots. She focuses on capturing genuine moments and crafting timeless
                                        images with natural light and thoughtful composition. Her packages are customizable to fit your
                                        needs.
                                    </p>
                                </section>

                                <section className="rounded-lg border border-sidebar-border/50 dark:border-sidebar-border bg-white/70 dark:bg-gray-900 p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h2 className="text-lg font-semibold">Portfolio</h2>
                                        <a className="text-sm text-primary">View full gallery</a>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <img className="w-full h-32 object-cover rounded" src="/images/placeholders/portfolio1.jpg" alt="portfolio 1" />
                                        <img className="w-full h-32 object-cover rounded" src="/images/placeholders/portfolio2.jpg" alt="portfolio 2" />
                                        <img className="w-full h-32 object-cover rounded" src="/images/placeholders/portfolio3.jpg" alt="portfolio 3" />
                                        <img className="w-full h-32 object-cover rounded" src="/images/placeholders/portfolio4.jpg" alt="portfolio 4" />
                                        <img className="w-full h-32 object-cover rounded" src="/images/placeholders/portfolio5.jpg" alt="portfolio 5" />
                                        <div className="w-full h-32 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm text-muted-foreground">
                                            +20 more
                                        </div>
                                    </div>
                                </section>

                                <section className="rounded-lg border border-sidebar-border/50 dark:border-sidebar-border bg-white/70 dark:bg-gray-900 p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h2 className="text-lg font-semibold">Reviews</h2>
                                        <div className="text-sm text-muted-foreground">Showing 3 of 256</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex-none" />
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium">Kemi Ade</span>
                                                    <span className="text-sm text-muted-foreground">· 2 months ago</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    Aisha was fantastic at our wedding — calm, creative, and so attentive to every detail.
                                                    The photos are stunning.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex-none" />
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium">Tunde O.</span>
                                                    <span className="text-sm text-muted-foreground">· 5 months ago</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    Great experience for our engagement shoot — relaxed direction and beautiful results.
                                                </p>
                                            </div>
                                        </div>

                                        <a className="text-sm text-primary">Read all reviews</a>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
