'use client';

const WordpressIntegrationPage = () => {
  return (
    <main className="px-8 py-10 max-sm:py-5 max-sm:px-5">
      <div className="flex flex-col gap-6 p-10 max-sm:p-5 bg-white rounded-3xl">
        <h1 className="font-bold text-2xl max-sm:text-xl text-left">
          Wordpress Integration
        </h1>

        {/* Integration Instructions */}
        <div className="bg-gray-200 flex flex-col gap-5 px-6 max-sm:px-3 py-5 ml-6 max-sm:ml-4 min-h-[60vh]">
          <h6 className="text-xl font-semibold max-sm:text-lg">Instructions</h6>

          <div className="flex flex-col gap-5 pl-4">
            <p className="text-lg max-sm:text-base font-semibold flex items-start gap-1">
              <span>•</span> <span>Download plugin</span>
            </p>
            <p className="text-lg max-sm:text-base font-semibold flex items-start gap-1">
              <span>•</span> <span>Upload plugin in Wordpress</span>
            </p>
            <p className="text-lg max-sm:text-base font-semibold flex items-start gap-1">
              <span>•</span> <span>Submit API key and Secret key</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WordpressIntegrationPage;
