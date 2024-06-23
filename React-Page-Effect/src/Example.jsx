import { Page } from "framer";
import { transform } from "framer-motion";

const pages = [1, 2, 3, 4, 5];

export function Example(props) {
    return (
        <Page
            width={150}
            height={150}
            radius={30}
            center
            gap={0}
            effect={(info) => {
                const offset = info.normalizedOffset;
                const opacity = transform(offset, [-1, 0, 1], [0.4, 1, 0.4]);
                const scale = transform(offset, [-1, 0, 1], [0.5, 1, 0.5]);
                const x = transform(offset, [-1, 0, 1], [20, 0, -20]);

                return { opacity, scale, x };
            }}
        >
            {pages.map((index) => {
                return (
                    <div
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 30,
                            backgroundColor: "#fff"
                        }}
                        key={index}
                    />
                );
            })}
        </Page>
    );
}
