import ScrollToTop from "react-scroll-up";

export default function BackToTop() {
    return (
        <ScrollToTop showUnder={160}>
            <a id="scrollUp">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </a>
        </ScrollToTop>
    );
}
