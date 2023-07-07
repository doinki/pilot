import type { Meta, StoryObj } from '@storybook/react';

import ViewCarouselOutlined from '../../lib/action/ViewCarouselOutlined';

const meta: Meta<typeof ViewCarouselOutlined> = {
  component: ViewCarouselOutlined,
  tags: ['autodocs'],
  title: 'action/ViewCarouselOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewCarouselOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
