import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

const InstagramCarousel = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${accessToken}`
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
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={post.media_url}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </a>
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