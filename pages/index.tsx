import Nav from 'components/nav';

export default function Main() {
  return (
    <div className="flex flex-col">
      <div className="px-4 pb-16 bg-orange-100">
        <Nav />

        <div className="flex justify-center">
          <div className="w-full max-w-5xl text-3xl font-medium md:w-3/4 lg:w-2/3 lg:text-6xl">
            <h1 className="py-12 mt-12 subpixel-antialiased leading-relaxed serif text-slate-900">
              We represent a new generation of{' '}
              <span className="text-blue-600 sans-serif">enterpreneurs</span>.
              Through experience and the sheer{' '}
              <span className="text-orange-600 sans-serif">determination</span>{' '}
              to set an example for those to come after us, we&#39;ve uncovered
              a lot of{' '}
              <span className="text-red-600 sans-serif">hidden rules.</span>{' '}
              Armed with this newly-found{' '}
              <span className="text-teal-600 sans-serif">knowledge</span>, we
              build companies and organizations to help{' '}
              <span className="text-yellow-500 sans-serif">world-changers</span>{' '}
              actually change the world.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
