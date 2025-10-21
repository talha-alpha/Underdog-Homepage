export default function Footer() {
  return (
    <footer className="bg-primary-darker text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">UNDERDOG</h2>
            <p className="text-gray-400 max-w-md">
              Underdog is the modern sports software helping trainers, parents, and academies scale with confidence.
            </p>
          </div>

          {/* Our Offer */}
          <div>
            <h3 className="font-semibold mb-4">Our Offer</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#parents" className="hover:text-white transition-colors">For Parents</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors">For Trainers</a></li>
              <li><a href="#academies" className="hover:text-white transition-colors">For Academies</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Term & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright @ Underdog, 2025.
            </p>
            <div className="flex space-x-6">
              <a href="#youtube" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
