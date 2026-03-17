import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
}

const InstagramCarousel = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Replace with your Instagram access token
        const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
        if (!accessToken) {
          // Fallback to placeholder images
          setPosts([
            { id: "1", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+1", permalink: "#" },
            { id: "2", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+2", permalink: "#" },
            { id: "3", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+3", permalink: "#" },
            { id: "4", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+4", permalink: "#" },
            { id: "5", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+5", permalink: "#" },
          ]);
          setLoading(false);
          return;
        }

        // Fetch from Instagram Graph API
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink,caption,thumbnail_url&access_token=${accessToken}`
        );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        setPosts(data.data.slice(0, 10)); // Limit to 10 posts
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load Instagram posts");
        // Fallback to placeholders
        setPosts([
          { id: "1", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+1", permalink: "#" },
          { id: "2", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+2", permalink: "#" },
          { id: "3", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+3", permalink: "#" },
          { id: "4", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+4", permalink: "#" },
          { id: "5", media_url: "https://via.placeholder.com/400x400?text=Instagram+Photo+5", permalink: "#" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect(); // Set initial index

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Handle video playback when slide changes
  useEffect(() => {
    // Stop all videos first
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play the video in the center if it's a video
    const centerVideo = videoRefs.current[currentIndex];
    if (centerVideo && posts[currentIndex]?.media_type === 'VIDEO') {
      centerVideo.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  }, [currentIndex, posts]);

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.muted) {
        video.muted = false;
      } else {
        // If already unmuted, redirect to Instagram
        window.open(posts[index].permalink, '_blank');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Unable to load Instagram photos. {error}</p>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      setApi={setApi}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {posts.map((post, index) => (
          <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {post.media_type === 'VIDEO' ? (
                    <div className="relative w-full h-full cursor-pointer" onClick={() => handleVideoClick(index)}>
                      {index === currentIndex ? (
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={post.media_url}
                          className="w-full h-full object-cover rounded-lg"
                          muted
                          loop
                          playsInline
                          poster={post.thumbnail_url}
                        />
                      ) : (
                        <>
                          <img
                            src={post.thumbnail_url || post.media_url}
                            alt={post.caption || "Instagram video"}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                            <div className="bg-white bg-opacity-80 rounded-full p-3">
                              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </>
                      )}
                      {index === currentIndex && (
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          Click to unmute
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={post.media_url}
                        alt={post.caption || "Instagram post"}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </a>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default InstagramCarousel;