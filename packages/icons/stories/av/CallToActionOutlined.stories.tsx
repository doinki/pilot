import type { Meta, StoryObj } from '@storybook/react';

import CallToActionOutlined from '../../lib/av/CallToActionOutlined';

const meta: Meta<typeof CallToActionOutlined> = {
  component: CallToActionOutlined,
  tags: ['autodocs'],
  title: 'av/CallToActionOutlined',
};

export default meta;
type Story = StoryObj<typeof CallToActionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
