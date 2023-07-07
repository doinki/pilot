import type { Meta, StoryObj } from '@storybook/react';

import NoAdultContentOutlined from '../../lib/social/NoAdultContentOutlined';

const meta: Meta<typeof NoAdultContentOutlined> = {
  component: NoAdultContentOutlined,
  tags: ['autodocs'],
  title: 'social/NoAdultContentOutlined',
};

export default meta;
type Story = StoryObj<typeof NoAdultContentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
