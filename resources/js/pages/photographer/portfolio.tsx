import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
// import { UploadCloud } from 'lucide-react';
import { Upload, X, LoaderCircle } from 'lucide-react';
import {
    FileUpload,
    FileUploadDropzone,
    FileUploadItem,
    FileUploadItemDelete,
    FileUploadItemMetadata,
    FileUploadItemPreview,
    FileUploadItemProgress,
    FileUploadList,
    FileUploadTrigger,
} from '@/components/ui/file-upload';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
// removed `useRoute` import (ziggy-js not installed)
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Photographer Profile',
        href: '#',
    },
];

export default function PhotographerProfile() {
    const { auth } = usePage().props as any;
    const user = auth?.user;
    const route = useRoute();
    const { data, setData, post, processing, errors, progress } = useForm({
        profile_picture: null,
        id: '',
        bio: '',
        name: user.name,
        email: user.email,
        images: [],
        hourlyrate: '',
        availability: null,
        equipment: '',
        university: '',
    });

    const onFileChange = (newFiles: File[]) => {
        setData('images', newFiles); // bind to inertia form
    };

    const onFileReject = React.useCallback((file: File, message: string) => {
        toast(message, {
            description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
        });
    }, []);

    const onFileReject3 = React.useCallback((file: File, message: string) => {
        toast(message, {
            description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
        });
    }, []);

    function handleSubmit(e: any) {
        e.preventDefault();
        post('/photo', {
            forceFormData: true,
        });
    }

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     post('/photographer/profile', {
    //         forceFormData: true,

    //         onSuccess: () => {
    //             alert('Profile updated successfully');
    //         },

    //         onError: (errors) => {
    //             console.log(errors);
    //         },
    //     });
    // };

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     post('/photographer/profile', {

    //         forceFormData: true,

    // });
    // };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Photographer Profile" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto max-w-5xl space-y-6 p-6">
                        <Card className="rounded-2xl shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">
                                    Photographer Profile Setup
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                    encType="multipart/form-data"
                                >
                                    <Input
                                        type="hidden"
                                        name="id"
                                        id="id"
                                        value={user.id}
                                    />
                                    {/* Profile Picture */}

                                    <Avatar className="h-30 w-30">
                                        <AvatarImage
                                            src={
                                                data.profile_picture
                                                    ? URL.createObjectURL(
                                                          data.profile_picture,
                                                      )
                                                    : ''
                                            }
                                        />
                                        <AvatarFallback>PP</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-2">
                                        <Label className="">
                                            Profile Picture
                                        </Label>
                                        <Input
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    'profile_picture',
                                                    e.target.files[0],
                                                )
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    {/*  */}
                                    <div className="space-y-2">
                                        <Label>FullName</Label>
                                        <Input
                                            placeholder="Your Name"
                                            value={data.name}
                                            name="name"
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            className="mt-2"
                                        />

                                        {errors.name && (
                                            <p className="text-sm text-red-500">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Email</Label>
                                        <Input
                                            placeholder="Your Email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            className="mt-2"
                                        />

                                        {errors.email && (
                                            <p className="text-sm text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Bio</Label>
                                        <Textarea
                                            placeholder="Tell clients about yourself..."
                                            value={data.bio}
                                            onChange={(e) =>
                                                setData('bio', e.target.value)
                                            }
                                            className="mt-2"
                                        />

                                        {errors.bio && (
                                            <p className="text-sm text-red-500">
                                                {errors.bio}
                                            </p>
                                        )}
                                    </div>

                                    {/* Portfolio Upload */}
                                    <div className="space-y-2">
                                        <Label>
                                            Portfolio (Minimum 3 Images)
                                        </Label>

                                        <FileUpload
                                            value={data.images}
                                            onValueChange={onFileChange}
                                            maxFiles={10}
                                            maxSize={5 * 1024 * 1024}
                                            className="mt-2 w-full"
                                            onFileReject={onFileReject}
                                            multiple
                                        >
                                            <FileUploadDropzone className="w-full">
                                                <div className="flex flex-col items-center gap-1 text-center">
                                                    <div className="flex items-center justify-center rounded-full border p-2.5">
                                                        <Upload className="size-6 text-muted-foreground" />
                                                    </div>
                                                    <p className="text-sm font-medium">
                                                        Drag & drop files here
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        Or click to browse (max
                                                        10 files, up to 5MB
                                                        each)
                                                    </p>
                                                </div>
                                                <FileUploadTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="mt-2 w-fit"
                                                    >
                                                        Browse files
                                                    </Button>
                                                </FileUploadTrigger>
                                            </FileUploadDropzone>

                                            <FileUploadList orientation="horizontal">
                                                {data.images.map(
                                                    (file, index) => (
                                                        <FileUploadItem
                                                            key={index}
                                                            value={file}
                                                            className="p-0"
                                                        >
                                                            <FileUploadItemPreview className="size-20">
                                                                /* Show
                                                                Inertia's
                                                                progress if
                                                                available
                                                                {progress ? (
                                                                    <FileUploadItemProgress
                                                                        variant="fill"
                                                                        style={{
                                                                            width: `${progress.percentage}%`,
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    <FileUploadItemProgress variant="fill" />
                                                                )}
                                                            </FileUploadItemPreview>
                                                            <FileUploadItemMetadata className="sr-only" />
                                                            <FileUploadItemDelete
                                                                asChild
                                                            >
                                                                <Button
                                                                    type="button"
                                                                    variant="secondary"
                                                                    size="icon"
                                                                    className="absolute -top-1 -right-1 size-5 rounded-full"
                                                                    onClick={() => {
                                                                        setData(
                                                                            'images',
                                                                            data.images.filter(
                                                                                (
                                                                                    _,
                                                                                    i,
                                                                                ) =>
                                                                                    i !==
                                                                                    index,
                                                                            ),
                                                                        );
                                                                    }}
                                                                >
                                                                    <X className="size-3" />
                                                                </Button>
                                                            </FileUploadItemDelete>
                                                        </FileUploadItem>
                                                    ),
                                                )}
                                            </FileUploadList>
                                        </FileUpload>

                                        {progress && (
                                            <progress
                                                value={progress.percentage}
                                                max="100"
                                            >
                                                {progress.percentage}%
                                            </progress>
                                        )}

                                        {errors.images && (
                                            <p className="text-sm text-red-500">
                                                {errors.images}
                                            </p>
                                        )}
                                    </div>

                                    {/* Hourly Rate */}
                                    <div className="space-y-2">
                                        <Label>Hourly Rate (£)</Label>
                                        <Input
                                            type="number"
                                            placeholder="e.g. 50"
                                            value={data.hourlyrate}
                                            onChange={(e) =>
                                                setData(
                                                    'hourlyrate',
                                                    e.target.value,
                                                )
                                            }
                                            className="mt-2"
                                        />
                                        {errors.hourlyrate && (
                                            <p className="text-sm text-red-500">
                                                {errors.hourlyrate}
                                            </p>
                                        )}
                                    </div>

                                    {/* Availability Calendar */}
                                    <div className="space-y-2">
                                        <Label>Availability</Label>
                                        <Calendar
                                            mode="single"
                                            selected={data.availability}
                                            onSelect={(date) =>
                                                setData('availability', date)
                                            }
                                            className="mt-2"
                                        />
                                        {errors.availability && (
                                            <p className="text-sm text-red-500">
                                                {errors.availability}
                                            </p>
                                        )}
                                    </div>

                                    {/* Equipment List */}
                                    <div className="space-y-2">
                                        <Label>Equipment (Optional)</Label>
                                        <Textarea
                                            placeholder="e.g. Canon R5, Drone, Lighting kit..."
                                            value={data.equipment}
                                            onChange={(e) =>
                                                setData(
                                                    'equipment',
                                                    e.target.value,
                                                )
                                            }
                                            className="mt-2"
                                        />

                                        {errors.equipment && (
                                            <p className="text-sm text-red-500">
                                                {errors.equipment}
                                            </p>
                                        )}
                                    </div>

                                    {/* University */}
                                    <div className="space-y-2">
                                        <Label>
                                            University (Location/Resident)
                                        </Label>
                                        <Input
                                            placeholder="e.g. University of Benin"
                                            value={data.university}
                                            onChange={(e) =>
                                                setData(
                                                    'university',
                                                    e.target.value,
                                                )
                                            }
                                            className="mt-2"
                                        />
                                        {errors.university && (
                                            <p className="text-sm text-red-500">
                                                {errors.university}
                                            </p>
                                        )}
                                    </div>

                                    {/* Stripe Onboarding 
                                    <div className="flex items-center justify-between rounded-xl border p-4">
                                        <div>
                                            <h3 className="font-semibold">
                                                Stripe Onboarding
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Connect your account to receive
                                                payments
                                            </p>
                                        </div>
                                        <Button type="button" variant="outline">
                                            Connect Stripe
                                        </Button>
                                    </div>
                                    */}

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full text-lg"
                                    >
                                        {processing && (
                                            <LoaderCircle className="h-4 w-4 animate-spin" />
                                        )}
                                        Save Profile
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
