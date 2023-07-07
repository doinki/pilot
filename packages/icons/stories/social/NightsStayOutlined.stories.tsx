import type { Meta, StoryObj } from '@storybook/react';

import NightsStayOutlined from '../../lib/social/NightsStayOutlined';

const meta: Meta<typeof NightsStayOutlined> = {
  component: NightsStayOutlined,
  tags: ['autodocs'],
  title: 'social/NightsStayOutlined',
};

export default meta;
type Story = StoryObj<typeof NightsStayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
