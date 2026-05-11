import Image from "next/image";
import { eventInfo, guests, site, snsLinks, tracks, youtubeVideo } from "./data";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function SocialMark({ name }: { name: string }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center border border-cream/35 text-xl text-cream/88 transition group-hover:border-cream/65 group-hover:text-cream sm:h-11 sm:w-11 sm:text-2xl">
      <SocialIcon name={name} />
    </span>
  );
}

function SocialIcon({ name }: { name: string }) {
  const commonProps = {
    "aria-hidden": true,
    className: "h-[1em] w-[1em]",
    fill: "currentColor",
    viewBox: "0 0 24 24",
  };

  if (name === "Instagram") {
    return (
      <svg {...commonProps}>
        <path d="M7.7 2h8.6A5.7 5.7 0 0 1 22 7.7v8.6a5.7 5.7 0 0 1-5.7 5.7H7.7A5.7 5.7 0 0 1 2 16.3V7.7A5.7 5.7 0 0 1 7.7 2Zm0 2A3.7 3.7 0 0 0 4 7.7v8.6A3.7 3.7 0 0 0 7.7 20h8.6a3.7 3.7 0 0 0 3.7-3.7V7.7A3.7 3.7 0 0 0 16.3 4H7.7Zm9.05 2.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.35A4.65 4.65 0 1 1 12 16.65 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 12 14.65 2.65 2.65 0 0 0 12 9.35Z" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg {...commonProps}>
        <path d="M15.45 2c.37 3.2 2.18 5.1 5.32 5.3v3.55a8.3 8.3 0 0 1-5.22-1.64v6.7c0 3.4-2.1 6.09-5.7 6.09-3.04 0-5.38-2.04-5.38-5.08 0-3.48 3.03-5.88 6.5-5.1v3.74c-1.44-.45-2.9.38-2.9 1.76 0 1 .8 1.7 1.82 1.7 1.23 0 2.02-.78 2.02-2.3V2h3.54Z" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg {...commonProps}>
        <path d="M21.58 7.2a3 3 0 0 0-2.1-2.12C17.62 4.58 12 4.58 12 4.58s-5.62 0-7.48.5A3 3 0 0 0 2.42 7.2 31.15 31.15 0 0 0 1.92 12c0 1.62.17 3.25.5 4.8a3 3 0 0 0 2.1 2.12c1.86.5 7.48.5 7.48.5s5.62 0 7.48-.5a3 3 0 0 0 2.1-2.12c.33-1.55.5-3.18.5-4.8 0-1.62-.17-3.25-.5-4.8ZM10 15.54V8.46L16.15 12 10 15.54Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M14.23 10.16 22.64 0h-1.99l-7.3 8.82L7.52 0H.8l8.82 13.34L.8 24h1.99l7.72-9.32L16.68 24h6.72l-9.17-13.84Zm-2.73 3.3-.9-1.33L3.5 1.56h3.07l5.73 8.52.9 1.33 7.46 11.1H17.6l-6.1-9.05Z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 font-display text-xs uppercase tracking-[0.28em] text-blush/80">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="grain min-h-screen overflow-hidden bg-ink text-cream">
      <Hero />
      <Album />
      <LiveEvent />
      <Guest />
      <SocialStreaming />
      <Profile />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="soft-vignette relative flex min-h-screen items-center justify-center px-5 py-16 sm:px-8">
      <Image
        src="/images/artist.jpg"
        alt="irune artist photo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,14,12,0.78),rgba(91,24,36,0.42),rgba(27,14,12,0.72))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <p className="mb-5 animate-fadeUp font-display text-xs uppercase tracking-[0.46em] text-cream/70">
          New full album out {site.albumDate}
        </p>
        <h1 className="animate-fadeUp font-display text-[clamp(5.3rem,19vw,16rem)] font-medium leading-[0.72] text-cream drop-shadow-[0_18px_60px_rgba(0,0,0,0.48)] [animation-delay:120ms]">
          {site.band}
        </h1>
        <div className="mt-9 animate-fadeUp space-y-2 font-display text-[clamp(1.45rem,4.5vw,3.4rem)] leading-none text-cream/92 [animation-delay:240ms]">
          <p>New album</p>
          <p>“{site.album}”</p>
          <p>Release party</p>
        </div>
        <div className="mt-10 flex animate-fadeUp flex-wrap items-center justify-center gap-3 [animation-delay:360ms]">
          <a className="classic-button gap-2" href={site.ticketUrl} target="_blank" rel="noreferrer">
            Ticket <ArrowIcon />
          </a>
          <a className="classic-button gap-2" href="#sns">
            SNS <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Album() {
  return (
    <section id="album" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute left-[-12rem] top-10 h-80 w-80 rounded-full bg-blush/16 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <SectionLabel>Album</SectionLabel>
          <h2 className="section-title max-w-3xl">New full album “cat food”</h2>
          <p className="mt-8 font-display text-3xl text-blush sm:text-5xl">{site.albumDate}</p>
          <div className="mt-8 max-w-2xl space-y-3 text-base leading-8 text-cream/78 sm:text-lg">
            <p>iruneが放つフルアルバム「cat food」。</p>
            <p>
              多種多様なジャンルを横断しながら、バンドの現在地を詰め込んだ作品。
            </p>
          </div>
        </div>
        <div className="border border-cream/20 bg-ink/28 p-6 backdrop-blur-sm sm:p-8">
          <p className="font-display text-2xl text-cream/92">Track list</p>
          <ol className="mt-6 space-y-3 text-sm uppercase tracking-[0.18em] text-cream/62">
            {tracks.map((track, index) => (
              <li key={track} className="flex justify-between border-b border-cream/12 pb-3">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{track}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function LiveEvent() {
  return (
    <section id="live" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <div className="image-frame aspect-[4/5] animate-float bg-wine/30">
          <Image
            src="/images/flyer.jpg"
            alt="full album cat food release party flyer"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="lg:pl-10">
          <SectionLabel>Live Event</SectionLabel>
          <h2 className="section-title max-w-3xl">{site.releaseParty}</h2>
          <dl className="mt-10 grid gap-4">
            {eventInfo.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 border-t border-cream/18 py-4 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="font-display text-xs uppercase tracking-[0.24em] text-blush/80">
                  {item.label}
                </dt>
                <dd className="font-display text-2xl leading-tight text-cream sm:text-3xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <a className="classic-button mt-8 gap-2" href={site.ticketUrl} target="_blank" rel="noreferrer">
            Ticket <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Guest() {
  return (
    <section id="guest" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Guest</SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          {guests.map((guest) => (
            <article
              key={guest.name}
              className="group grid gap-5 border border-cream/18 bg-cream/[0.04] p-4 backdrop-blur-sm sm:grid-cols-[10rem_1fr] sm:p-5"
            >
              <div className="image-frame aspect-[4/3] bg-wine/30">
                <Image
                  src={guest.image}
                  alt={`${guest.name} image placeholder`}
                  fill
                  sizes="(min-width: 640px) 10rem, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-end py-2">
                <p className="font-display text-xs uppercase tracking-[0.28em] text-blush/75">
                  {guest.note}
                </p>
                <h3 className="mt-3 font-display text-4xl text-cream">{guest.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialStreaming() {
  return (
    <section id="sns" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>SNS / Streaming</SectionLabel>
          <h2 className="section-title">Follow the sound</h2>
          <div className="mt-9 grid gap-3">
            {snsLinks.map((link) => (
              <a
                key={link.name}
                className="group flex items-center justify-between border border-cream/18 bg-ink/20 p-4 transition hover:border-cream/60 hover:bg-cream/10"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-4">
                  <SocialMark name={link.name} />
                  <span className="font-display text-2xl">{link.name}</span>
                </span>
                <ArrowIcon />
              </a>
            ))}
          </div>
          <button className="classic-button mt-6 w-full gap-2 sm:w-auto" type="button">
            Streaming Links Coming Soon
          </button>
        </div>
        <div className="border border-cream/18 bg-ink/24 p-3 shadow-soft backdrop-blur-sm sm:p-4">
          <div className="relative overflow-hidden bg-black/45">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(91,24,36,0.14),rgba(27,14,12,0.18))]" />
            <iframe
              className="aspect-video w-full"
              src={youtubeVideo.embedUrl}
              title={youtubeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <a
            className="mt-4 flex items-center justify-between border-t border-cream/14 pt-4 font-display text-xl text-cream/88 transition hover:text-cream"
            href={youtubeVideo.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>YouTube</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section id="profile" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="image-frame aspect-[16/11] bg-wine/30">
          <Image
            src="/images/artist.jpg"
            alt="irune profile"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionLabel>Profile</SectionLabel>
          <h2 className="section-title">{site.band}</h2>
          <p className="mt-8 text-base leading-8 text-cream/78 sm:text-lg">
            irune is a Japanese band creating songs that move freely across genres,
            textures, and emotions. Their new full album “cat food” captures the
            band’s current sound in its most vivid form.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream/14 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-5xl leading-none">irune</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-[0.18em] text-cream/66">
          {snsLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="hover:text-cream">
              {link.name}
            </a>
          ))}
        </nav>
        <p className="text-xs uppercase tracking-[0.18em] text-cream/46">
          © 2026 irune
        </p>
      </div>
    </footer>
  );
}
