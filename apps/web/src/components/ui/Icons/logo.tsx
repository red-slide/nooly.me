import { clsx } from "clsx";

export const logo = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 43"
      className={clsx(className)}
    >
    <path  className="fill-dark-1 dark:fill-light-1" d="M39.5505 31.3055C38.8617 32.2162 37.7652 32.8052 36.5302 32.8052C34.4452 32.8052 32.755 31.1264 32.755 29.0554C32.755 29.0553 32.755 29.0552 32.755 29.0551C32.2809 29.6819 32 30.461 32 31.3053C32 33.3763 33.6902 35.0551 35.7753 35.0551C37.8602 35.0551 39.5504 33.3764 39.5505 31.3055Z" fill="#FAFAFA"/>
    <path  className="fill-dark-1 dark:fill-light-1" d="M18.1207 29H13.6747L6.23866 17.742V29H1.79266V10.748H6.23866L13.6747 22.058V10.748H18.1207V29ZM27.9474 29.208C26.5261 29.208 25.2434 28.9047 24.0994 28.298C22.9728 27.6913 22.0801 26.8247 21.4214 25.698C20.7801 24.5713 20.4594 23.254 20.4594 21.746C20.4594 20.2553 20.7888 18.9467 21.4474 17.82C22.1061 16.676 23.0074 15.8007 24.1514 15.194C25.2954 14.5873 26.5781 14.284 27.9994 14.284C29.4208 14.284 30.7034 14.5873 31.8474 15.194C32.9914 15.8007 33.8928 16.676 34.5514 17.82C35.2101 18.9467 35.5394 20.2553 35.5394 21.746C35.5394 23.2367 35.2014 24.554 34.5254 25.698C33.8668 26.8247 32.9568 27.6913 31.7954 28.298C30.6514 28.9047 29.3688 29.208 27.9474 29.208ZM27.9474 25.36C28.7968 25.36 29.5161 25.048 30.1054 24.424C30.7121 23.8 31.0154 22.9073 31.0154 21.746C31.0154 20.5847 30.7208 19.692 30.1314 19.068C29.5594 18.444 28.8488 18.132 27.9994 18.132C27.1328 18.132 26.4134 18.444 25.8414 19.068C25.2694 19.6747 24.9834 20.5673 24.9834 21.746C24.9834 22.9073 25.2608 23.8 25.8154 24.424C26.3874 25.048 27.0981 25.36 27.9474 25.36ZM44.5021 29.208C43.0808 29.208 41.7981 28.9047 40.6541 28.298C39.5275 27.6913 38.6348 26.8247 37.9761 25.698C37.3348 24.5713 37.0141 23.254 37.0141 21.746C37.0141 20.2553 37.3435 18.9467 38.0021 17.82C38.6608 16.676 39.5621 15.8007 40.7061 15.194C41.8501 14.5873 43.1328 14.284 44.5541 14.284C45.9755 14.284 47.2581 14.5873 48.4021 15.194C49.5461 15.8007 50.4475 16.676 51.1061 17.82C51.7648 18.9467 52.0941 20.2553 52.0941 21.746C52.0941 23.2367 51.7561 24.554 51.0801 25.698C50.4215 26.8247 49.5115 27.6913 48.3501 28.298C47.2061 28.9047 45.9235 29.208 44.5021 29.208ZM44.5021 25.36C45.3515 25.36 46.0708 25.048 46.6601 24.424C47.2668 23.8 47.5701 22.9073 47.5701 21.746C47.5701 20.5847 47.2755 19.692 46.6861 19.068C46.1141 18.444 45.4035 18.132 44.5541 18.132C43.6875 18.132 42.9681 18.444 42.3961 19.068C41.8241 19.6747 41.5381 20.5673 41.5381 21.746C41.5381 22.9073 41.8155 23.8 42.3701 24.424C42.9421 25.048 43.6528 25.36 44.5021 25.36ZM58.8988 9.76V29H54.4528V9.76H58.8988ZM76.9408 14.492L67.8408 35.89H63.0568L66.3848 28.506L60.4828 14.492H65.4488L68.8028 23.566L72.1308 14.492H76.9408ZM104.398 14.336C106.201 14.336 107.631 14.882 108.688 15.974C109.763 17.066 110.3 18.5827 110.3 20.524V29H105.88V21.122C105.88 20.186 105.629 19.4667 105.126 18.964C104.641 18.444 103.965 18.184 103.098 18.184C102.232 18.184 101.547 18.444 101.044 18.964C100.559 19.4667 100.316 20.186 100.316 21.122V29H95.8964V21.122C95.8964 20.186 95.6451 19.4667 95.1424 18.964C94.6571 18.444 93.9811 18.184 93.1144 18.184C92.2477 18.184 91.5631 18.444 91.0604 18.964C90.5751 19.4667 90.3324 20.186 90.3324 21.122V29H85.8864V14.492H90.3324V16.312C90.7831 15.7053 91.3724 15.2287 92.1004 14.882C92.8284 14.518 93.6517 14.336 94.5704 14.336C95.6624 14.336 96.6331 14.57 97.4824 15.038C98.3491 15.506 99.0251 16.1733 99.5104 17.04C100.013 16.2427 100.698 15.5927 101.564 15.09C102.431 14.5873 103.376 14.336 104.398 14.336ZM127.086 21.512C127.086 21.928 127.06 22.3613 127.008 22.812H116.946C117.015 23.7133 117.301 24.4067 117.804 24.892C118.324 25.36 118.957 25.594 119.702 25.594C120.811 25.594 121.583 25.126 122.016 24.19H126.748C126.505 25.1433 126.063 26.0013 125.422 26.764C124.798 27.5267 124.009 28.1247 123.056 28.558C122.103 28.9913 121.037 29.208 119.858 29.208C118.437 29.208 117.171 28.9047 116.062 28.298C114.953 27.6913 114.086 26.8247 113.462 25.698C112.838 24.5713 112.526 23.254 112.526 21.746C112.526 20.238 112.829 18.9207 113.436 17.794C114.06 16.6673 114.927 15.8007 116.036 15.194C117.145 14.5873 118.419 14.284 119.858 14.284C121.262 14.284 122.51 14.5787 123.602 15.168C124.694 15.7573 125.543 16.598 126.15 17.69C126.774 18.782 127.086 20.056 127.086 21.512ZM122.536 20.342C122.536 19.5793 122.276 18.9727 121.756 18.522C121.236 18.0713 120.586 17.846 119.806 17.846C119.061 17.846 118.428 18.0627 117.908 18.496C117.405 18.9293 117.093 19.5447 116.972 20.342H122.536Z" fill="#FAFAFA"/>
    <path  d="M80.6285 29.208C79.8485 29.208 79.2072 28.9827 78.7045 28.532C78.2192 28.064 77.9765 27.492 77.9765 26.816C77.9765 26.1227 78.2192 25.542 78.7045 25.074C79.2072 24.606 79.8485 24.372 80.6285 24.372C81.3912 24.372 82.0152 24.606 82.5005 25.074C83.0032 25.542 83.2545 26.1227 83.2545 26.816C83.2545 27.492 83.0032 28.064 82.5005 28.532C82.0152 28.9827 81.3912 29.208 80.6285 29.208Z" fill="#FF006F"/>
    </svg>
    
  );
};
