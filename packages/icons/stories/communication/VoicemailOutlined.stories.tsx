import type { Meta, StoryObj } from '@storybook/react';

import VoicemailOutlined from '../../lib/communication/VoicemailOutlined';

const meta: Meta<typeof VoicemailOutlined> = {
  component: VoicemailOutlined,
  tags: ['autodocs'],
  title: 'communication/VoicemailOutlined',
};

export default meta;
type Story = StoryObj<typeof VoicemailOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
