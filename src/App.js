function App() {
  return (
    <div>
      <header className={'header'}>
        <h1>Hello World!</h1>
      </header>
      <div className={'container'}>
        <aside className={'aside'}>
          <header>
            <h2>Aside</h2>
          </header>
            <ul>
              <li>nav 1</li>
              <li>nav 2</li>
              <li>nav 3</li>
            </ul>
        </aside>

        <div className={'container-inner'}>
          <header>
            <h2>Container</h2>
          </header>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque, magna at lobortis hendrerit, enim ligula pharetra lacus, id luctus massa nulla a eros. Nam molestie laoreet consectetur. Sed id tempus erat. Duis tempus velit in diam pellentesque fermentum. Pellentesque rhoncus, nisl at pellentesque volutpat, sem nisl tristique lacus, quis malesuada sem quam at massa. Phasellus tincidunt sodales ex vel malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut dolor et velit tristique aliquet. Donec congue purus ut quam feugiat, vitae efficitur turpis volutpat.</p>
          <p>Fusce non velit purus. Suspendisse vitae placerat lectus. Vivamus in lorem dignissim, consectetur nunc at, ornare lorem. Aliquam erat volutpat. Sed condimentum arcu nec libero eleifend dapibus. Cras pulvinar ante at ligula gravida, ut dictum felis dictum. Sed vehicula faucibus velit.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
