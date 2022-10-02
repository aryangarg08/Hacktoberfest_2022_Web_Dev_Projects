import React from "react";
import "./blog.css";
function Blog() {
  return (
    <div className="blog-section">
      <div className="section-content blog">
        <div className="title">
          <h2>Blog and News</h2>
          <p>
            Latest News, Articles and new developments in the field of Crypto
            Currencies.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="image-section">
              <img
                src="https://i.postimg.cc/wxnrVNr6/blogimage1.jpg"
                alt="image1"
              />
            </div>
            <div className="article">
              <p>
                Cryptocurrencies traded in the green early on March 25. The
                global crypto market cap is $1.99 trillion, a 0.60 percent
                decrease over the last day. The total crypto market volume over
                the last 24 hours is $89.09 billion, a decrease of 16.56
                percent. The total volume in DeFi is currently $11.10 billion,
                12.46 percent of the total crypto market 24-hour volume. The
                volume of all stablecoins is now $72.80 billion, which is 81.71
                percent of the total crypto market 24-hour volume. Bitcoin's
                price is currently $44,283.20, with a dominance of 42.29
                percent.
              </p>
            </div>
            <div className="blog-view">
              <a href="" className="button">
                Read More....
              </a>
            </div>
            <div className="posted-date">
              <p>Posted on 25march 2022</p>
            </div>
          </div>
          <div className="card">
            <div className="image-section">
              <img
                src="https://i.postimg.cc/xjX7M5tx/blogimage2.jpg"
                alt="image1"
              />
            </div>
            <div className="article">
              <p>
                LONDON: The global Financial Stability Board is closely
                scrutinising the use of crypto assets during the war in Ukraine
                after concerns they could be used to evade Western sanctions on
                Russia. Some crypto exchanges have rejected calls to cut off all
                Russian users, raising concerns that crypto could be used as a
                way to circumvent sanctions. The crypto sector is on the
                defensive amid warnings from U.S. and European lawmakers that
                digital asset companies are not up to the task of complying with
                Western financial sanctions imposed on Russia following the
                country's invasion of Ukraine.
              </p>
            </div>
            <div className="blog-view">
              <a href="" className="button">
                Read More....
              </a>
            </div>
            <div className="posted-date">
              <p>Posted on 25march 2022</p>
            </div>
          </div>
          <div className="card">
            <div className="image-section">
              <img
                src="https://i.postimg.cc/t70Fxp2j/blogimage3.jpg"
                alt="image1"
              />
            </div>
            <div className="article">
              <p>
                Cryptocurrency industry leaders are mulling moving court over
                reduction of taxes, according to a report. Finance minister
                Nirmala Sitharaman last month announced that cryptocurrencies
                would be subject to a 30% capital gains tax, a 1% tax deducted
                at source (TDS), no loss offsetting, and taxes on gifts. As
                reported by CoinDesk, an unnamed executive of a major crypto
                exchange said: “It seems so. The industry has been pressing for
                tax reductions during informal negotiations with the government.
                Several such encounters with decision-makers were verified by
                executives from other exchanges.
              </p>
            </div>
            <div className="blog-view">
              <a href="" className="button">
                Read More....
              </a>
            </div>
            <div className="posted-date">
              <p>Posted on 25march 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
