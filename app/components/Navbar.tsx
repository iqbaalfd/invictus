"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Identity", href: "#about", id: "about" },
  { label: "Members", href: "#members", id: "members" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
];

const sectionIds = ["about", "members", "journey", "gallery", "code"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* =========================================================
     NAVBAR SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleNavbarScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleNavbarScroll();

    window.addEventListener("scroll", handleNavbarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION TRACKING
  ========================================================= */

  useEffect(() => {
    const handleSectionTracking = () => {
      const viewportPoint = window.innerHeight * 0.38;

      let currentSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= viewportPoint &&
          rect.bottom >= viewportPoint
        ) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleSectionTracking();

    window.addEventListener("scroll", handleSectionTracking, {
      passive: true,
    });

    window.addEventListener("resize", handleSectionTracking);

    return () => {
      window.removeEventListener("scroll", handleSectionTracking);
      window.removeEventListener("resize", handleSectionTracking);
    };
  }, []);

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={`fixed left-0 top-0 z-50 w-full transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#030712]/80 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* =====================================================
            UNSAP LOGO
        ====================================================== */}

        <a
          href="#"
          aria-label="Back to top"
          className="relative z-50 block h-10 w-24 shrink-0 md:w-28"
        >
          <Image
            src="/images/unsap.webp"
            alt="UNSAP"
            fill
            priority
            sizes="112px"
            className="object-contain object-left"
          />
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 md:flex"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-blue-300"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-blue-400 transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* =====================================================
            DESKTOP RIGHT SPACER
        ====================================================== */}

        <div className="hidden w-24 shrink-0 md:block md:w-28" />

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/15 bg-blue-500/5 text-slate-200 transition-colors hover:bg-blue-500/10 md:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="bg-[#030712]/95 px-6 pb-6 pt-3 backdrop-blur-xl md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-4 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-blue-300"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>

                    <span
                      className={`absolute bottom-2 left-0 h-px bg-blue-400 transition-all duration-300 ${
                        isActive ? "w-8" : "w-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}