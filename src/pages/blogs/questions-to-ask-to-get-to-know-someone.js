import Navigation from '@/components/Navigation';
import Image from 'next/image';
import AppLinks from '@/components/AppLinks';


// slug: questions-to-ask-to-get-to-know-someone
export default function Blog() {
  return (
    <>
      <Navigation />
      <div id="blog-content" className='container'>
        <div className='col-md-10 col-lg-8 col-xl-6 mx-auto'>
          <h1>50 Questions to Ask Someone to Get to Know Them Better</h1>

          <p className='text-sm'>
            Published on January 11, 2026
          </p>

          <Image 
            src="/images/blogs/006/50Questions.png" 
            alt="50 Questions to Ask Someone to Get to Know Them Better Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />

          <p className='mt-4'>
            Getting to know someone better doesn't always require long conversations or perfectly timed calls. Often, it starts with one thoughtful question and the space to answer it honestly.
          </p>

          <p>
            Whether you're reconnecting with a friend or just checking in, the right question can turn a quick message into something more meaningful. These questions are easy to ask, easy to answer, and work well in short voice messages or longer reflections.
          </p>

          <p className='my-4 lead highlight'>
            Tip: pick one question, answer it as a voice message, and invite a friend to share their thoughts.
          </p>


          <h2>Light Check-In Questions</h2>

          <p>
            Simple, low-pressure questions that are easy to answer and easy to send.
          </p>

          <p>
            Sometimes the hardest part is starting. These questions are perfect for breaking the ice without making it feel like a big conversation.
          </p>

          <Image 
            src="/images/blogs/006/lifeCheckin.png" 
            alt="person recording voice message casually on their phones"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />

          <ol className='mt-4'>
            <li>What's something small that made you smile recently?</li>
            <li>How has this week felt for you so far?</li>
            <li>What's one thing you're looking forward to right now?</li>
            <li>What's been taking up most of your energy lately?</li>
            <li>What's a recent win, even a small one?</li>
            <li>What's something you've been enjoying more than usual?</li>
            <li>How are you really feeling today?</li>
            <li>What's one thing you wish you had more time for right now?</li>
          </ol>

          <h2>Life Update Questions</h2>

          <p>
            Thoughtful prompts that help someone reflect and share more meaningfully.
          </p>

          <p>
            These questions work especially well when you're catching up or continuing a conversation over time.
          </p>

          <Image 
            src="/images/blogs/006/lifeUpdate.png" 
            alt="person reflecting while listening to a voice message"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />

          <ol start="9" className='mt-4'>
            <li>What moment from the past year stands out the most to you?</li>
            <li>What changed for you this past year that you didn't expect?</li>
            <li>What's something you learned about yourself recently?</li>
            <li>What's one challenge you're proud of getting through?</li>
            <li>What did you let go of this year that helped you grow?</li>
            <li>What's something you're grateful for right now?</li>
            <li>What's a habit or routine that made a difference for you?</li>
            <li>What's one thing you want to carry into the next year?</li>
          </ol>

          <h2>Deepen Friendship Questions</h2>

          <p>
            Questions designed to move past surface-level updates.
          </p>

          <p>
            These are best used with people you already know and want to connect with on a deeper level.
          </p>

          <Image 
            src="/images/blogs/006/deeperFriendship.png" 
            alt="close friends having a thoughtful voice conversation"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />

          <ol start="17" className='mt-4'>
            <li>What's something about your life right now that most people don't see?</li>
            <li>What's been on your mind lately that you haven't talked much about?</li>
            <li>What's something you wish people asked you more often?</li>
            <li>When do you feel most like yourself?</li>
            <li>What's something you've been working on internally?</li>
            <li>What's a belief or perspective that's changed for you recently?</li>
            <li>What kind of support feels most helpful to you right now?</li>
            <li>What's something you appreciate about our friendship?</li>
          </ol>

          <h2>Questions You Don't Usually Ask</h2>

          <p>
            Unexpected questions that often lead to more honest answers.
          </p>

          <p>
            These work especially well as voice messages, where pauses and tone add meaning.
          </p>

          <Image 
            src="/images/blogs/006/thoughtfulMessage.png" 
            alt="person recording a thoughtful voice message"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />

          <ol start="25" className='mt-4'>
            <li>What's something you're unsure about right now?</li>
            <li>What does “doing well” mean to you at this point in your life?</li>
            <li>What's something you've outgrown?</li>
            <li>What's a fear you're learning to sit with?</li>
            <li>What do you think you've gotten better at over time?</li>
            <li>What's something you're still figuring out?</li>
            <li>What's a question you've been asking yourself lately?</li>
            <li>What feels important to you right now that didn't used to?</li>
          </ol>

          <h2>Quick Questions That Go a Long Way</h2>

          <p>
            Light, simple questions that are easy to answer but still say something real.
          </p>

          <p>
            These work especially well when you want to send a short voice message without overthinking it.
          </p>

          <Image 
            src="/images/blogs/006/quickRecording.png" 
            alt="person recording a casual voice message on their phone"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />

          <ol start="33" className='mt-4'>
            <li>What's been taking up the most space in your head lately?</li>
            <li>What's one thing you've been quietly enjoying?</li>
            <li>What's something that felt heavier than expected this week?</li>
            <li>What's a moment from today you don't want to forget?</li>
            <li>What's something that made you pause recently?</li>
            <li>What's one thing you wish you could explain better to people right now?</li>
            <li>What's something small that's actually been a big deal for you?</li>
            <li>What's been easier than you thought it would be?</li>
          </ol>


          <h2>Looking Ahead Questions</h2>

          <p>
            Questions that invite intention without feeling overwhelming.
          </p>

          <p>
            These are great for conversations that unfold gradually over time.
          </p>

          <Image 
            src="/images/blogs/006/listeningThoughtfully.png" 
            alt="person listening thoughtfully and laughing"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />

          <ol start="41" className='mt-4'>
            <li>What are you hoping the next few months feel like?</li>
            <li>What's something you want to prioritize more?</li>
            <li>What's one thing you're curious about right now?</li>
            <li>What kind of energy do you want to bring into what's next?</li>
            <li>What's something you're open to changing?</li>
            <li>What would make the near future feel lighter for you?</li>
            <li>What's one thing you're quietly excited about?</li>
            <li>What's something you want to be more present for?</li>
            <li>What's one thing you're working toward, even slowly?</li>
            <li>What question would you want someone to ask you right now?</li>
          </ol>

          
          <h2>Turn Questions Into Real Conversations</h2>

          <p>
            You don't need to answer all of these questions or wait for the perfect moment. Pick one, record a short voice message, and send it. Sometimes that's all it takes to stay connected.
          </p>

          <p>
            If you want a simple way to have these kinds of conversations without needing to be online at the same time, Roads Audio is built for exactly that. It lets you share voice messages, respond when it works for you, and keep the full context of the conversation over time.
          </p>

          <p>
            Download Roads Audio and try it with a friend.
          </p>

          <div className="pt-1">
            <AppLinks />
          </div>

        </div>
      </div>
    </>
  )
}