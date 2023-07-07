import type { Meta, StoryObj } from '@storybook/react';

import ClosedCaptionOffOutlined from '../../lib/av/ClosedCaptionOffOutlined';

const meta: Meta<typeof ClosedCaptionOffOutlined> = {
  component: ClosedCaptionOffOutlined,
  tags: ['autodocs'],
  title: 'av/ClosedCaptionOffOutlined',
};

export default meta;
type Story = StoryObj<typeof ClosedCaptionOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
