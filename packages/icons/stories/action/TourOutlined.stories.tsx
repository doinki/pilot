import type { Meta, StoryObj } from '@storybook/react';

import TourOutlined from '../../lib/action/TourOutlined';

const meta: Meta<typeof TourOutlined> = {
  component: TourOutlined,
  tags: ['autodocs'],
  title: 'action/TourOutlined',
};

export default meta;
type Story = StoryObj<typeof TourOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
