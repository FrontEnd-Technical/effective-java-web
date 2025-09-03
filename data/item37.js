export const code_block = {
  method1: `
public enum Phase {
    SOLID, LIQUID, GAS;

    public enum Transition {
        MELT, FREEZE, BOIL, CONDENSE, SUBLIME, DEPOSIT;

        // Mảng để lưu các chuyển đổi pha
        private static final Transition[][] TRANSITIONS = {
            { null,    MELT,     SUBLIME },   // from SOLID
            { FREEZE,  null,     BOIL    },   // from LIQUID
            { DEPOSIT, CONDENSE, null    }    // from GAS
        };

        // Dùng ordinal() để lập chỉ mục - RẤT NGUY HIỂM!
        public static Transition from(Phase from, Phase to) {
            return TRANSITIONS[from.ordinal()][to.ordinal()];
        }
    }
}
`,
  method2: `
import java.util.EnumMap;
import java.util.Map;

public enum Phase {
    SOLID, LIQUID, GAS;

    public enum Transition {
        MELT, FREEZE, BOIL, CONDENSE, SUBLIME, DEPOSIT;

        // Dùng EnumMap - An toàn, rõ ràng và mạnh mẽ
        private static final Map<Phase, Map<Phase, Transition>> m =
            new EnumMap<>(Phase.class);

        static {
            for (Phase p : Phase.values())
                m.put(p, new EnumMap<>(Phase.class));
            
            m.get(Phase.SOLID).put(Phase.LIQUID, MELT);
            m.get(Phase.SOLID).put(Phase.GAS, SUBLIME);
            m.get(Phase.LIQUID).put(Phase.SOLID, FREEZE);
            m.get(Phase.LIQUID).put(Phase.GAS, BOIL);
            m.get(Phase.GAS).put(Phase.SOLID, DEPOSIT);
            m.get(Phase.GAS).put(Phase.LIQUID, CONDENSE);
        }

        public static Transition from(Phase from, Phase to) {
            return m.get(from).get(to);
        }
    }
}
`,
};
