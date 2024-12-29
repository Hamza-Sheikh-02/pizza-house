import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaPizzaSlice,
  FaBoxOpen,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-primary font-medium text-lg mb-2">
            Get In Touch With <span className="text-primary">Pizza House</span>
          </h3>
          <p className="text-muted-foreground">
            For more information about our pizzas and services, feel free to
            contact us. Our team is always here to help. We can&apos;t wait to
            hear from you!
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-sm text-muted-foreground">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-primary text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-sm text-muted-foreground">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-primary text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Working Time</h4>
                <p className="text-sm text-muted-foreground">
                  Monday-Sunday: 10:00 AM - 11:00 PM <br />
                  Friday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground"
              >
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full border border-border bg-background rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full border border-border bg-background rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground"
              >
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full border border-border bg-background rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary"
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-gray-100 dark:bg-black py-12 grid gap-6 md:grid-cols-3 text-center">
        <div className="flex flex-col items-center">
          <FaPizzaSlice className="text-primary text-4xl mb-3" />
          <h4 className="text-lg font-semibold">Delicious Recipes</h4>
          <p className="text-sm text-muted-foreground">Crafted with love</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBoxOpen className="text-primary text-4xl mb-3" />
          <h4 className="text-lg font-semibold">Quick Delivery</h4>
          <p className="text-sm text-muted-foreground">
            Hot and fresh to your door
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-primary text-4xl mb-3" />
          <h4 className="text-lg font-semibold">Customer Support</h4>
          <p className="text-sm text-muted-foreground">
            Always ready to assist you
          </p>
        </div>
      </div>
    </section>
  );
}
