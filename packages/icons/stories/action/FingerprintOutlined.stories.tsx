import type { Meta, StoryObj } from '@storybook/react';

import FingerprintOutlined from '../../lib/action/FingerprintOutlined';

const meta: Meta<typeof FingerprintOutlined> = {
  component: FingerprintOutlined,
  tags: ['autodocs'],
  title: 'action/FingerprintOutlined',
};

export default meta;
type Story = StoryObj<typeof FingerprintOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
