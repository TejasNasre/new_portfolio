import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { FaDownload } from "react-icons/fa6";

const Home: React.FC = () => {
  return (
    <>
      <div className="font-codefont min-h-screen w-full bg-[#FEFFF0] p-4 pt-32 md:p-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Full Stack Developer
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I code top notch{" "}
                <span className="relative inline-block">
                  webapps
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10"></div>
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                Building modern, responsive, and user-friendly web applications
                with cutting-edge technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full font-medium transition-shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  see portfolio
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                </motion.button>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-black hover:text-blue-600 font-medium"
                >
                  Resume <FaDownload className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Border Frame */}
                <div className="absolute inset-0 border-2 border-black bg-gradient-to-br from-blue-100 to-white rounded-3xl transform rotate-2"></div>
                <div className="absolute inset-0 border-2 border-black bg-gradient-to-br from-blue-100 to-white rounded-3xl transform -rotate-2"></div>

                {/* Main Image Container */}
                <div className="relative h-full border-2 border-black bg-[#FEFFF0] rounded-3xl overflow-hidden">
                  <img
                    src="https://avatars.githubusercontent.com/u/113225478?s=400&u=aaea653becd54a239fd40e80f8bece7933425f6f&v=4"
                    alt="Developer Portrait"
                    className="object-cover w-full"
                  />

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center">
                    <span className="text-xl">:)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;