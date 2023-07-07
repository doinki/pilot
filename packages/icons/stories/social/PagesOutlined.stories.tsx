import type { Meta, StoryObj } from '@storybook/react';

import PagesOutlined from '../../lib/social/PagesOutlined';

const meta: Meta<typeof PagesOutlined> = {
  component: PagesOutlined,
  tags: ['autodocs'],
  title: 'social/PagesOutlined',
};

export default meta;
type Story = StoryObj<typeof PagesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
