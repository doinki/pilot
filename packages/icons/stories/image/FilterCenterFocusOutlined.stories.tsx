import type { Meta, StoryObj } from '@storybook/react';

import FilterCenterFocusOutlined from '../../lib/image/FilterCenterFocusOutlined';

const meta: Meta<typeof FilterCenterFocusOutlined> = {
  component: FilterCenterFocusOutlined,
  tags: ['autodocs'],
  title: 'image/FilterCenterFocusOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterCenterFocusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
