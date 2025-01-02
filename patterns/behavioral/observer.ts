interface Subscriber {
  update(videoTitle: string): void;
}

class VideoChannel {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber): void {
    const index = this.subscribers.indexOf(subscriber);

    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  uploadVideo(videoTitle: string): void {
    console.log(`Uploading video: ${videoTitle}`);
    this.notify(videoTitle);
  }

  notify(videoTitle: string): void {
    this.subscribers.forEach(subscriber => subscriber.update(videoTitle));
  }
}