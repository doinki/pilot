import type { Meta, StoryObj } from '@storybook/react';

import HearingOutlined from '../../lib/av/HearingOutlined';

const meta: Meta<typeof HearingOutlined> = {
  component: HearingOutlined,
  tags: ['autodocs'],
  title: 'av/HearingOutlined',
};

export default meta;
type Story = StoryObj<typeof HearingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
