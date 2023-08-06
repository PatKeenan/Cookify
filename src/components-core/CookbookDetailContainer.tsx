import { FullWidth, Layout, PageTitle } from "@/components-common";
import { Button } from "@/components-common/ui";
import { cn } from "@/lib-client/utils";
import { randomColor } from "@/lib-client/utils/randomColor";
import { Slot } from "@radix-ui/react-slot";
import { ArrowLeftIcon, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CookbookDetailContainer = () => {
  return (
    <Layout activeNav="cookbooks">
      <FullWidth>
        <div className="px-2 py-2 ">
          <div
            className={cn(
              "relative flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-t from-gray-950 px-4 py-6 lg:px-8",
              randomColor("gradient")
            )}
          >
            <div className="absolute inset-0 top-0 px-4 pt-6 lg:px-8">
              <Slot className="flex h-8 w-8 appearance-none items-center justify-center rounded-full bg-primary-foreground transition-all hover:bg-primary-foreground/90 ">
                <Link href="/cookbooks">
                  <ChevronLeft className="h-6 w-6 text-black" aria-hidden />
                  <span className="sr-only">Back</span>
                </Link>
              </Slot>
            </div>
            <div className="flex space-x-6 rounded-md ">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZiUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80"
                alt="Italian Cuisine"
                width={250}
                height={250}
                className={cn("aspect-square rounded-md object-cover")}
                priority
              />

              <div className="mt-auto flex h-full flex-col justify-end break-words  text-white">
                <h2 className="text-8xl font-semibold tracking-tight ">
                  Cookbook Title
                </h2>
                <div className="ml-1 mt-2 flex items-center space-x-2 text-sm text-muted">
                  <div className="flex h-8 w-8">
                    <Image
                      src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZiUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Italian Cuisine"
                      width={20}
                      height={20}
                      className={cn("h-full w-full rounded-full object-cover")}
                      priority
                    />
                  </div>
                  <p>Cookbook Title, 12 Recipes, Created 2/4/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullWidth>
      {/*  <div>
        <Button variant="outline">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
      <PageTitle title="Cookbook Name" /> */}
    </Layout>
  );
};

/*  {
    name: "Chef Mike",
    artist: "Italian Cuisine",
    cover:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZiUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
  }, */
