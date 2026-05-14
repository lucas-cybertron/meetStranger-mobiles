import React, { useState } from 'react';

import {
    Modal,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { reportModalStyles as styles, } from '../styles/modals/reportModalStyles';

interface ReportModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (reason: string) => void;
}

const reasons = [
    '⚠ Inappropriate content',
    '💬 Offensive messages',
    '🚫 Spam',
    '🔞 Sexual content',
    '🛑 Hate speech',
    '❓ Other',
];

export function ReportModal({
    visible,
    onClose,
    onSubmit,
}: ReportModalProps) {

    const [selectedReason, setSelectedReason] =
        useState('');

    const handleSubmit = () => {

        if (!selectedReason) return;

        onSubmit(selectedReason);

        setSelectedReason('');

        onClose();
    };

    return (

        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >

            <View style={styles.overlay}>

                <View style={styles.modal}>

                    <Text style={styles.title}>
                        Report user
                    </Text>

                    <Text style={styles.subtitle}>
                        Why are you reporting this user?
                    </Text>

                    {reasons.map((reason) => {

                        const selected =
                            selectedReason === reason;

                        return (

                            <TouchableOpacity
                                key={reason}
                                activeOpacity={0.8}
                                onPress={() =>
                                    setSelectedReason(reason)
                                }
                                style={[
                                    styles.reasonButton,

                                    selected &&
                                    styles.reasonButtonSelected,
                                ]}
                            >

                                <Text
                                    style={[
                                        styles.reasonText,

                                        selected &&
                                        styles.reasonTextSelected,
                                    ]}
                                >
                                    {reason}
                                </Text>

                            </TouchableOpacity>
                        );
                    })}

                    <View style={styles.footer}>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={onClose}
                        >

                            <Text style={styles.cancelText}>
                                Cancel
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.reportButton}
                            onPress={handleSubmit}
                        >

                            <Text style={styles.reportText}>
                                Report
                            </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </Modal>
    );
}
