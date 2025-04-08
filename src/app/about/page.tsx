import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About TED-like Talks</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          TED-like Talks is a platform inspired by TED Talks, featuring thought-provoking presentations 
          from experts, innovators, and thought leaders across various fields. Our mission is to spread 
          ideas that have the power to change attitudes, lives, and ultimately, the world.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          We believe in the power of ideas to change attitudes, lives, and ultimately, the world. 
          We're building a clearinghouse of free knowledge from the world's most inspired thinkers, 
          and also a community of curious souls to engage with ideas and each other.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
        <p className="mb-6">
          We curate talks that are concise, powerful, and focused on a single idea. Each talk is 
          carefully selected to ensure it provides value, insight, and inspiration to our audience.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Join Our Community</h2>
        <p className="mb-6">
          We're more than just a platform for talks. We're a community of curious minds who are 
          passionate about learning, sharing, and growing together. Join us in our mission to 
          spread ideas that matter.
        </p>
        
        <div className="bg-ted-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>
            Have questions or suggestions? We'd love to hear from you. Reach out to us at{' '}
            <a href="mailto:info@tedlike.com" className="text-ted-blue-500 hover:underline">
              info@tedlike.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 