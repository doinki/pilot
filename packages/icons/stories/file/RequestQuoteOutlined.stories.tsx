import type { Meta, StoryObj } from '@storybook/react';

import RequestQuoteOutlined from '../../lib/file/RequestQuoteOutlined';

const meta: Meta<typeof RequestQuoteOutlined> = {
  component: RequestQuoteOutlined,
  tags: ['autodocs'],
  title: 'file/RequestQuoteOutlined',
};

export default meta;
type Story = StoryObj<typeof RequestQuoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
