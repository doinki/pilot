import type { Meta, StoryObj } from '@storybook/react';

import ClosedCaptionOutlined from '../../lib/av/ClosedCaptionOutlined';

const meta: Meta<typeof ClosedCaptionOutlined> = {
  component: ClosedCaptionOutlined,
  tags: ['autodocs'],
  title: 'av/ClosedCaptionOutlined',
};

export default meta;
type Story = StoryObj<typeof ClosedCaptionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
