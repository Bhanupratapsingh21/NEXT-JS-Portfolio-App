import React, { useEffect, useState } from 'react';
import { ArrowRight, Instagram, Newspaper } from 'lucide-react';

// Types for our data
type BlogPost = {
    category: string;
    title: string;
    description: string;
    timeAgo: string;
};

const DUMMY_BLOG_POSTS: BlogPost[] = [
    {
        category: 'Development',
        title: 'Coming Soon: Building with Next.js 14',
        description: 'Stay tuned for insights on building modern web applications with Next.js 14 and its powerful features.',
        timeAgo: 'Coming Soon'
    },
    {
        category: 'Tech Tips',
        title: 'Coming Soon: Web Performance Deep Dive',
        description: 'An upcoming detailed guide on optimizing web applications for maximum performance and user experience.',
        timeAgo: 'Coming Soon'
    },
    {
        category: 'Career',
        title: 'Coming Soon: Modern Web Development Journey',
        description: 'Soon sharing my experiences and insights from my journey in web development.',
        timeAgo: 'Coming Soon'
    }
];

const SocialFeed = () => {
    const [igPosts, setIgPosts] = useState<Array<{ id: string; url: string; thumbnail: string }>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                // Replace with your actual Instagram API endpoint
                const response = await fetch('/api/instagram-posts');
                const data = await response.json();
                setIgPosts(data);
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="bg-clip-text text-2xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Social Feed
                </h2>
                <p className="mt-4 text-gray-400">Stay connected with my latest content, thoughts, and tech insights</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Instagram Feed Section */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                        <Instagram className="w-6 h-6" />
                        Instagram Feed
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        {loading ? (
                            // Loading state placeholders
                            Array(4).fill(null).map((_, i) => (
                                <div key={i} className="aspect-square bg-neutral-800 rounded-lg overflow-hidden animate-pulse">
                                    <div className="w-full h-full bg-neutral-700/50 flex items-center justify-center">
                                        <span className="text-neutral-500 text-sm">Loading...</span>
                                    </div>
                                </div>
                            ))
                        ) : igPosts.length > 0 ? (
                            // Actual Instagram posts
                            igPosts.slice(0, 4).map((post) => (
                                <a
                                    key={post.id}
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="aspect-square bg-neutral-800 rounded-lg overflow-hidden hover:opacity-75 transition-opacity"
                                >
                                    <img
                                        src={post.thumbnail}
                                        alt="Instagram post"
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            ))
                        ) : (
                            // Placeholder posts when no data
                            Array(4).fill(null).map((_, i) => (
                                <div key={i} className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-neutral-700/50 flex items-center justify-center">
                                        <span className="text-neutral-500 text-sm">Post</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <a
                        href="https://instagram.com/bpss.codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-500"
                    >
                        Follow on Instagram
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>

                {/* Blog Posts Section */}
                <div className="space-y-6 lg:col-span-2">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                        <Newspaper className="w-6 h-6" />
                        Latest Blog Posts
                    </h3>

                    <div className="space-y-6">
                        {DUMMY_BLOG_POSTS.map((post, index) => (
                            <div key={index} className="group bg-neutral-800/50 rounded-xl p-6 hover:bg-neutral-800 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <span className="text-blue-600 text-sm">{post.category}</span>
                                        <h4 className="text-lg font-medium text-white mt-1 mb-2">{post.title}</h4>
                                        <p className="text-neutral-400 line-clamp-2">{post.description}</p>
                                    </div>
                                    <span className="text-sm text-neutral-500">{post.timeAgo}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-500">
                        Read More Posts
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialFeed;