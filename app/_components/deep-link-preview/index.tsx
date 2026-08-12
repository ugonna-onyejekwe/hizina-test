import Image from "next/image";

import { APP_STORE_URLS } from "@/lib/constants";
import Container from "@/components/ui/container";
import Link from "next/link";
import { page_routes } from "@/app/routes";

type DeepLinkPreviewProps = {
  type: "post" | "profile";
  data?: {
    name: string;
    username: string;
    image?: string;
    content?: string;
    media?: {
      type: "image" | "video";
      url: string;
    };
  };
};

const FALLBACK_CONTENT = {
  post: {
    title: "Discover this post on Hizina",
    description:
      "Open Hizina to discover more posts, conversations, communities, and commerce.",
  },
  profile: {
    title: "Discover this profile on Hizina",
    description:
      "Open Hizina to connect with people, discover communities, and explore more.",
  },
};

export function DeepLinkPreview({ type, data }: DeepLinkPreviewProps) {
  const fallback = FALLBACK_CONTENT[type];

  return (
    <Container className="flex min-h-dvh items-center justify-center  py-5">
      <div className="w-full max-w-xl ">
        {/* Preview */}
        <div className=" rounded-[20px] border bg-card shadow-sm ">
          {data ? (
            <>
              {/* Author */}
              <div className="flex items-center gap-3 p-4">
                {data.image ? (
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="size-12 rounded-full bg-muted"
                    aria-hidden="true"
                  />
                )}

                <div className="min-w-0">
                  <p className="truncate font-semibold">{data.name}</p>

                  <p className="truncate text-sm text-muted-foreground">
                    @{data.username}
                  </p>
                </div>
              </div>

              {/* Post */}
              {type === "post" && (
                <>
                  {data.content && (
                    <p className="px-4 pb-4 whitespace-pre-wrap">
                      {data.content.length > 150
                        ? `${data.content.slice(0, 150)}... `
                        : data.content}

                      {data.content.length > 150 && (
                        <Link
                          href="/get-app"
                          className="text-primary hover:underline"
                        >
                          See more
                        </Link>
                      )}
                    </p>
                  )}

                  {data.media && (
                    <div className="relative aspect-video w-full overflow-hidden bg-muted flex justify-center items-center">
                      {data.media.type === "image" ? (
                        <Image
                          src={data.media.url}
                          alt={`Post by ${data.name}`}
                          width={500}
                          height={500}
                          className="w-fit h-fit"
                        />
                      ) : (
                        <video
                          src={data.media.url}
                          className="size-full object-cover"
                          preload="metadata"
                          muted
                          playsInline
                        />
                      )}
                    </div>
                  )}
                </>
              )}

              {/* Profile */}
              {type === "profile" && (
                <div className="px-4 pb-6">
                  <p className="text-muted-foreground">
                    View{" "}
                    <Link href={page_routes.getApp} className="text-primary">
                      {" "}
                      @{data.username}&apos;s
                    </Link>{" "}
                    profile and discover more on Hizina.
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Fallback */
            <div className="px-6 py-10 text-center">
              <h1 className="text-xl font-semibold">{fallback.title}</h1>

              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                {fallback.description}
              </p>
            </div>
          )}

          {/* App CTA */}
          <div className="border-t p-5 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Get the full Hizina experience on the app.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={APP_STORE_URLS.apple}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/download-on-apple.png"
                  alt="Download on the App Store"
                  width={150}
                  height={40}
                  className="h-10 w-[150px]"
                />
              </a>

              <a
                href={APP_STORE_URLS.android}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/download-on-google.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={40}
                  className="h-10 w-[150px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
