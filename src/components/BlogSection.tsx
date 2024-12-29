import Image from "next/image";
import blogs from "@/data/blog";

export default function BlogSection() {
  return (
    <section className="bg-gray-100 dark:bg-black text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-primary">Latest</span> News & Blog
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm">{blog.date}</p>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
