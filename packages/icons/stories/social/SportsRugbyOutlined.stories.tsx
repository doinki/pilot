import type { Meta, StoryObj } from '@storybook/react';

import SportsRugbyOutlined from '../../lib/social/SportsRugbyOutlined';

const meta: Meta<typeof SportsRugbyOutlined> = {
  component: SportsRugbyOutlined,
  tags: ['autodocs'],
  title: 'social/SportsRugbyOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsRugbyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
