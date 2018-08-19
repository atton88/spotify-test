window.onSpotifyWebPlaybackSDKReady = () => {
    const token = "BQD6fA3Fl8fgmqLUZwfLB_FfPo4sEy5t1_N85YyO_4jgdIS9TVbyp0C6if-3t-cnmdjja_xTB0jr1f8H653jo5d4jD10Gc4lRarx8BIEVg-eSFSMQlrUSBGw8Nwg5x3aLbtWcNO2ggDfA2rhgs2wbFcIQkApF_LbzH9fG0ORjt9JIfmenbghipjPJb6tdv4VPEwkQ67oDysgaiNDggD61v_dVt9Bkr6-xwizFvwt6W4GOJEM2OlfZDY";
    const player = new Spotify.Player({
    name: 'Test Player',
    getOAuthToken: cb => { cb(token); }
});

// Error handling
player.addListener('initialization_error', ({ message }) => { console.error(message); });
player.addListener('authentication_error', ({ message }) => { console.error(message); });
player.addListener('account_error', ({ message }) => { console.error(message); });
player.addListener('playback_error', ({ message }) => { console.error(message); });

// Playback status updates
player.addListener('player_state_changed', state => { console.log(state); });

// Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
});

// Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
 });

 // Connect to the player!
    player.connect();

    $('#toggleplay').on("click", function() {
        player.togglePlay();
    });

    $('#forward').on("click", function() {
        player.previousTrack();
    });

    $('#back').on("click", function() {
        player.nextTrack();
    });

};