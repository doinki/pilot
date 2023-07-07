import type { Meta, StoryObj } from '@storybook/react';

import UpcomingOutlined from '../../lib/content/UpcomingOutlined';

const meta: Meta<typeof UpcomingOutlined> = {
  component: UpcomingOutlined,
  tags: ['autodocs'],
  title: 'content/UpcomingOutlined',
};

export default meta;
type Story = StoryObj<typeof UpcomingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
