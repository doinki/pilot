import type { Meta, StoryObj } from '@storybook/react';

import CancelScheduleSendOutlined from '../../lib/action/CancelScheduleSendOutlined';

const meta: Meta<typeof CancelScheduleSendOutlined> = {
  component: CancelScheduleSendOutlined,
  tags: ['autodocs'],
  title: 'action/CancelScheduleSendOutlined',
};

export default meta;
type Story = StoryObj<typeof CancelScheduleSendOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
