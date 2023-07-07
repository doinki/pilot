import type { Meta, StoryObj } from '@storybook/react';

import NewReleasesOutlined from '../../lib/av/NewReleasesOutlined';

const meta: Meta<typeof NewReleasesOutlined> = {
  component: NewReleasesOutlined,
  tags: ['autodocs'],
  title: 'av/NewReleasesOutlined',
};

export default meta;
type Story = StoryObj<typeof NewReleasesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
