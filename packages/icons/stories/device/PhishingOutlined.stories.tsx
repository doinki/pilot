import type { Meta, StoryObj } from '@storybook/react';

import PhishingOutlined from '../../lib/device/PhishingOutlined';

const meta: Meta<typeof PhishingOutlined> = {
  component: PhishingOutlined,
  tags: ['autodocs'],
  title: 'device/PhishingOutlined',
};

export default meta;
type Story = StoryObj<typeof PhishingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
