import type { Meta, StoryObj } from '@storybook/react';

import AppsOutageOutlined from '../../lib/navigation/AppsOutageOutlined';

const meta: Meta<typeof AppsOutageOutlined> = {
  component: AppsOutageOutlined,
  tags: ['autodocs'],
  title: 'navigation/AppsOutageOutlined',
};

export default meta;
type Story = StoryObj<typeof AppsOutageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
