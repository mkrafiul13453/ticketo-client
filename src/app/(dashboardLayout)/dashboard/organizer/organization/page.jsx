"use client";
import DashboardHeading from '@/components/DashboardHeading';
import { addOrganization } from '@/lib/api/organization/action';
import { myOrganization } from '@/lib/api/organization/data';
import { useSession } from '@/lib/auth-client';
import { uploadImage } from '@/utils/uploadImage';
import { Button, Card, CardHeader, Form, Input, TextArea } from '@heroui/react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaImage } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Organization = () => {
    const { data: session } = useSession();
    const [myOrg ,setMyOrg] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);


    // Fetch Organization Data
    useEffect(() => {
        const setOrgData = async () => {
            const org = await myOrganization(session.user.email);
            setMyOrg(org);
        }
        setOrgData();
    }, [session]);

    console.log(myOrg);


    const onOrganizationSubmit = async (data) => {
        console.log(data);

        const imageFile = data.logo[0];
        const imageUrl = await uploadImage(imageFile)



        const orgData = {
            organizationName: data.organizationName,
            logo: imageUrl,
            website: data.website,
            description: data.description,
            organizerEmail: session.user.email

        };

        const resData = await addOrganization(orgData);
        if (resData.insertedId) {
            toast.success('Organization added successfully');
            redirect('/dashboard/organizer');

        }
        // console.log(resData);
    }

    return (
        <div>
            <DashboardHeading title="Organization" description="Update Logo,Profile Picture,Website,Description"></DashboardHeading>
            <div className="mt-6 space-y-6 max-w-3xl">
                <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl" radius="lg">
                    <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
                        <h3 className="text-xl font-bold text-white">Organization Details</h3>
                        <p className="text-slate-400 text-xs">Review and edit your organization credentials.</p>
                    </CardHeader>
                    <div className="p-6">
                        <Form onSubmit={handleSubmit(onOrganizationSubmit)} className="space-y-4 w-full">
                            <Input
                                defaultValue={myOrg?.organizationName}
                                {...register("organizationName", { required: "Organization Name is required" })}
                                id="organizationName" label="Organization Name" labelplacement="outside" placeholder="TechEvents Corp" required className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500" />
                            {errors.organizationName && <p className="text-red-500 text-xs">*{errors.organizationName.message}</p>}


                            <Input
                                {...register("logo", { required: "Organization Logo is required" })}
                                type="file"
                                accept="image/*"
                                id="logo"
                                placeholder="https://example.com/avatar.jpg"
                                labelplacement="outside"
                                startcontent={<FaImage className="text-slate-400 text-sm" />}
                                className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500"
                            />
                            {errors.logo && <p className="text-red-500 text-xs">*{errors.logo.message}</p>}

                            <Input
                            defaultValue={myOrg?.website}
                                {...register("website", { required: "Organization Website is required" })}
                                id="website" label="Organization Website" labelplacement="outside" placeholder="techevents.corp" required className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500" />
                            {errors.website && <p className="text-red-500 text-xs">*{errors.website.message}</p>}

                            <TextArea
                            defaultValue={myOrg?.description}
                                {...register("description", { required: "Description is required" })}
                                id="org-desc" label="Description" labelplacement="outside" placeholder="Hosting global developer conferences and software hacking marathons." required className="w-full bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none min-h-[100px] text-white text-sm" />
                            {errors.description && <p className="text-red-500 text-xs">*{errors.description.message}</p>}

                            <div className="flex gap-4">
                                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-11 px-6 shadow-lg" radius="lg">Save Changes</Button>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div>

        </div>
    );

}


export default Organization;   