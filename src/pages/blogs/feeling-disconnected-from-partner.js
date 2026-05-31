import Navigation from '@/components/Navigation';
import Image from 'next/image';
import AppLinks from '@/components/AppLinks';
import Head from 'next/head';
import Link from 'next/link';
import { generateArticleSchema, renderSchemaScript } from '@/utils/schema';
import metaConfig from '@/utils/metaConfig';
import { formatDate } from '@/utils/dateUtils';

// slug: feeling-disconnected-from-partner
export default function Blog() {
  const slug = '/blogs/feeling-disconnected-from-partner';
  const meta = metaConfig[slug];

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    slug,
    description: meta.description,
    image: meta.image,
    datePublished: meta.datePublished,
  });

  const formattedDate = formatDate(meta.datePublished);

  return (
    <>
      <Head>
        <script {...renderSchemaScript(articleSchema)} />
      </Head>
      <Navigation />
      <main id="main-content">
        <div id="blog-content" className="container">
          <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
            <h1>Feeling Disconnected from Your Partner? How to Rebuild Daily Connection</h1>
            <p className="text-sm">Published on {formattedDate}</p>

            <Image
              src="/images/blogs/022/disconnectedHero.png"
              alt="Couple sitting together but looking distant, suggesting emotional disconnect"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />

            <p className="my-4 lead highlight">
              You live in the same house. You sleep in the same bed. But somewhere along the way,
              you stopped really talking. The connection that used to feel effortless now feels like
              work, or worse, like something that slipped away without either of you noticing.
            </p>

            <h2>How Couples Drift Apart</h2>

            <p>
              It rarely happens all at once. There's no big fight, no dramatic moment where
              everything changes. Instead, it's gradual. Life gets busy. Work demands more
              attention. Kids need things. The house needs things. By the time you both collapse at
              the end of the day, there's nothing left for each other.
            </p>

            <p>
              Conversations shrink to logistics. Who's picking up the kids. What's for dinner. Did
              you pay that bill. The small moments of sharing, the random thoughts and daily
              observations that used to flow naturally, stop happening because there's never enough
              time or energy.
            </p>

            <p>
              Over months or years, you realize you don't know what's going on in your partner's
              inner life anymore. You're coordinating a household but not sharing a life.
            </p>

            <h2>What Gets Lost</h2>

            <p>
              The texture of a relationship lives in small moments. The offhand comment about
              something funny at work. The frustration vented about a difficult colleague. The
              random memory that popped up during a commute. These aren't big conversations, but
              they're the threads that keep two lives woven together.
            </p>

            <p>
              When those threads stop getting shared, partners become strangers living parallel
              lives. You know the facts of each other's days but not the feelings. You're informed
              but not connected.
            </p>

            <p>
              This is what people mean when they say they feel disconnected. The love might still be
              there. The commitment might still be there. But the daily sense of being known and
              knowing someone else has faded.
            </p>

            <Image
              src="/images/blogs/022/coupleOnPhones.png"
              alt="Two people in the same room both looking at their phones, not engaging with each other"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="my-3"
            />

            <h2>Why "Just Talk More" Doesn't Work</h2>

            <p>
              The obvious advice is to communicate more. Schedule date nights. Put down your phones.
              Make time for real conversation.
            </p>

            <p>
              This advice isn't wrong, but it often fails because it requires resources that
              depleted couples don't have. Finding a babysitter, carving out hours, summoning
              emotional energy after exhausting days. The bar is too high, so nothing changes.
            </p>

            <p>
              What's needed isn't necessarily more big conversations. It's more small ones. Lower
              the bar from "schedule a date night" to "share one thing that happened today." The
              goal is rebuilding the habit of sharing, not creating elaborate events.
            </p>

            <h2>Starting Small</h2>

            <p>
              Reconnection doesn't require grand gestures. It requires consistency in small ones. A
              few approaches that actually work:
            </p>

            <p>
              <strong>Share one thing daily.</strong> Make it a practice to tell your partner one
              thing that happened in your day beyond logistics. Something that made you laugh,
              frustrated you, surprised you, or made you think. Just one thing, every day.
            </p>

            <p>
              <strong>Ask real questions.</strong> Instead of "how was your day?" (which gets "fine"
              as an answer), ask something specific. "What was the best part of today?" or "What's
              weighing on you right now?" Questions that invite actual answers.
            </p>

            <p>
              <strong>Use transition moments.</strong> The first few minutes when you reunite after
              work. The time before falling asleep. These natural transitions are opportunities for
              quick connection that don't require scheduling.
            </p>

            <p>
              <strong>Lower the production value.</strong> Connection doesn't need to be a sit-down
              heart-to-heart. It can happen while making dinner, during a walk, or in a quick voice
              message during lunch.
            </p>

            <h2>Why Voice Helps</h2>

            <p>
              When schedules are packed and energy is low, voice messaging offers a way to share
              without requiring both people to be available and present at the same moment.
            </p>

            <p>
              Recording a 60-second update about your day takes almost no effort. You can do it
              during a commute, a lunch break, or while waiting in line. Your partner can listen
              when they have a moment. The sharing happens without the scheduling.
            </p>

            <p>
              Voice also carries what text loses. Your partner hears your actual voice, your tone,
              your mood. A quick voice message saying "you won't believe what happened in my
              meeting" feels more connecting than a text saying the same thing.
            </p>

            <p>
              For couples who've fallen into purely logistical communication, voice messages can
              become the container for everything else. The random thoughts. The venting. The small
              joys. All the texture that stopped getting shared when life got too busy.
            </p>

            <h2>Making It a Habit</h2>

            <p>Like any habit, this works better with structure:</p>

            <ul>
              <li>
                Pick a consistent time when you'll share something. Morning commute. Lunch break.
                Before bed.
              </li>
              <li>
                Start with a commitment to just one message per day. It's small enough to actually
                happen.
              </li>
              <li>
                Don't make it formal. This isn't therapy homework. It's just telling your partner
                about your day.
              </li>
              <li>
                Respond to what they share. Ask follow-up questions. React to their stories. Make it
                a conversation, not parallel monologues.
              </li>
            </ul>

            <p>
              Over time, the habit rebuilds the sharing muscle that atrophied. You start knowing
              each other's days again. The connection comes back not through a dramatic intervention
              but through accumulated small moments.
            </p>

            <Image
              src="/images/blogs/022/coupleReconnecting.png"
              alt="Couple smiling while looking at a phone together, suggesting renewed connection"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="my-3"
            />

            <h2>Roads Audio for Couples</h2>

            <p>
              Roads Audio provides a simple way to share voice messages with your partner. Create a
              private channel that's just for the two of you. Use it to share the small stuff
              throughout the day.
            </p>

            <p>
              The format works well for busy couples because it's async. You don't need overlapping
              free time. Record when you have a moment. Listen when you have a moment. The
              conversation builds over the course of the day without either person having to stop
              what they're doing.
            </p>

            <p>
              Some couples use it for daily check-ins. Others use it more sporadically, sharing when
              something worth mentioning happens. The structure is whatever works for your
              relationship.
            </p>

            <p>
              For more on using voice for relationship communication, see our post on{' '}
              <Link href="/blogs/couples-communication-app">couples communication apps</Link>.
            </p>

            <h2>Connection Is a Practice</h2>

            <p>
              Feeling disconnected from your partner doesn't mean the relationship is broken. It
              often just means the habits that kept you close got crowded out by everything else.
            </p>

            <p>
              The solution isn't necessarily dramatic. It's returning to basics. Share your day.
              Listen to theirs. Do it consistently, even when it's just small moments grabbed
              between everything else.
            </p>

            <p>
              Relationships are built on thousands of small interactions, not a few big ones. Start
              with today. Share one thing. See what happens when you stop treating connection as
              something that requires a calendar invite.
            </p>

            <div className="pt-2">
              <h2 className="h3-lg my-lg text-center text-primary bold">
                Try Roads Audio Free Today
              </h2>
              <p className="text-center">
                Start sharing more with your partner through voice messages that fit into busy
                lives. Create a private channel and rebuild the daily connection.
              </p>
              <AppLinks />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
