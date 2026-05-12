export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Restaurant Info */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-500">
                        Wonka Restaurant
                    </h2>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                        Experience the magic of flavors at Wonka Restaurant.
                        We serve fresh, delicious, and handcrafted meals made with love.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">

                        <li className="hover:text-orange-400 cursor-pointer">Order Online</li>
                        <li className="hover:text-orange-400 cursor-pointer">About Us</li>
                        <li className="hover:text-orange-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-300">📍 Kaliganj, Dhaka, Bangladesh</p>
                    <p className="text-gray-300 mt-2">📞 +880 1234-567890</p>
                    <p className="text-gray-300 mt-2">📧 support@wonka.com</p>

                    {/* Social */}
                    <div className="flex gap-4 mt-5">
                        <a href="#" className="hover:text-orange-400">Facebook</a>
                        <a href="#" className="hover:text-orange-400">Instagram</a>
                        <a href="#" className="hover:text-orange-400">Twitter</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
                © {new Date().getFullYear()} Wonka Restaurant. All rights reserved.
            </div>
        </footer>
    );
}