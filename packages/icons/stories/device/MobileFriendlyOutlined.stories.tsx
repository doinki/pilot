import type { Meta, StoryObj } from '@storybook/react';

import MobileFriendlyOutlined from '../../lib/device/MobileFriendlyOutlined';

const meta: Meta<typeof MobileFriendlyOutlined> = {
  component: MobileFriendlyOutlined,
  tags: ['autodocs'],
  title: 'device/MobileFriendlyOutlined',
};

export default meta;
type Story = StoryObj<typeof MobileFriendlyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
